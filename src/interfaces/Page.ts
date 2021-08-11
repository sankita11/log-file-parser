export interface PageByCounts {
  pageName: string;
  visitCount: number;
}

export interface PageByIP {
  [key: string]: string[];
}
