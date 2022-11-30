import { IasqlFunctions } from '..';
import { Context, RpcBase, RpcResponseObject, TransactionModeEnum } from '../../interfaces';

export class IasqlPreviewSync extends RpcBase {
  module: IasqlFunctions;
  transactionMode = TransactionModeEnum.NO_TRANSACTION;
  outputTable = {
    action: 'varchar',
    table_name: 'varchar',
    id: 'varchar',
    description: 'varchar',
  } as const;
  call = async (
    _dbId: string,
    _dbUser: string,
    _ctx: Context,
  ): Promise<RpcResponseObject<typeof this.outputTable>[]> => {
    throw new Error(`iasql_preview_sync() has been deprecated in favor of iasql_preview()`);
  };

  constructor(module: IasqlFunctions) {
    super();
    this.module = module;
    super.init();
  }
}
