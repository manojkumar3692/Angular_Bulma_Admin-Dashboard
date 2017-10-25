/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface JQuery {
  daterangepicker(options?: any, callback?: Function) : any;
}
