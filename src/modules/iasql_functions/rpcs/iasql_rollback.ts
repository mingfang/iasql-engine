import { IasqlFunctions } from '..';
import {
  Context,
  PostTransactionCheck,
  PreTransactionCheck,
  RpcBase,
  RpcResponseObject,
} from '../../interfaces';
import * as iasql from '../iasql';

/**
 * Method to abort an IaSQL transaction if you want to discard the changes done since calling `iasql_begin` by
 * calling `iasql_rollback`. This will re-enable regular behaviour of IaSQL in which changes are propagated
 * both ways in an eventually consistent way without any special syntax other than
 * `SELECT/INSERT/UPDATE/DELETE` records normally.
 *
 * Returns following columns:
 * - action: The action issued in the db
 * - table_name: Table that was affected
 * - id: the ID of the generated change
 * - description: A description of the generated change
 *
 * @example
 * ```sql
 * SELECT * FROM iasql_rollback();
 * ```
 *
 * @see https://iasql.com/docs/transaction/
 *
 */
export class IasqlRollback extends RpcBase {
  /**
   * @internal
   */
  module: IasqlFunctions;
  /** @internal */
  preTransactionCheck = PreTransactionCheck.FAIL_IF_NOT_LOCKED;
  /** @internal */
  postTransactionCheck = PostTransactionCheck.UNLOCK_IF_SUCCEED;
  /**
   * @internal
   */
  outputTable = {
    action: 'varchar',
    table_name: 'varchar',
    id: 'varchar',
    description: 'varchar',
  } as const;

  /** @internal */
  call = async (
    dbId: string,
    _dbUser: string,
    ctx: Context,
  ): Promise<RpcResponseObject<typeof this.outputTable>[]> => {
    const res = (await iasql.rollback(dbId, ctx)).rows;
    return (
      res?.map(rec => super.formatObjKeysToSnakeCase(rec) as RpcResponseObject<typeof this.outputTable>) ?? []
    );
  };

  constructor(module: IasqlFunctions) {
    super();
    this.module = module;
    super.init();
  }
}
