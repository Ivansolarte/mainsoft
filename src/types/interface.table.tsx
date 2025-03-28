 interface TableData {
    name: string;
    img: string;
  }

  interface pagin {
    limit: string,
    offset: string,
    count: number,
  }


  
  export interface TableProps {
    data: TableData[];
    title:string[];
    pagination:pagin;
    setPaginationValue:any;
  }