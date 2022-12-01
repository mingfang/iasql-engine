import { IasqlFunctions } from '..';
import { Context, PostTransactionCheck, PreTransactionCheck, RpcBase, RpcResponseObject } from '../../interfaces';
import * as iasql from '../iasql';

export class IasqlPreview extends RpcBase {
  module: IasqlFunctions;
  preTransactionCheck = PreTransactionCheck.FAIL_IF_NOT_LOCKED;
  postTransactionCheck = PostTransactionCheck.NO_CHECK;
  outputTable = {
    action: 'varchar',
    table_name: 'varchar',
    id: 'varchar',
    description: 'varchar',
  } as const;
  call = async (
    dbId: string,
    _dbUser: string,
    ctx: Context,
  ): Promise<RpcResponseObject<typeof this.outputTable>[]> => {
    const res = (await iasql.commit(dbId, true, ctx)).rows;
    return res.map(rec => super.formatObjKeysToSnakeCase(rec) as RpcResponseObject<typeof this.outputTable>);
  };

  constructor(module: IasqlFunctions) {
    super();
    this.module = module;
    super.init();
  }
}
