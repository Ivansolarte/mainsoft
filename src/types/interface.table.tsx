 interface TableData {
    id: number;
    name: string;
  }
  
  export interface TableProps {
    data: TableData[];
    title:Any[];
    pagination:any;
    setPaginationValue:any;
  }