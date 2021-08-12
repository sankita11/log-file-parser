import { PageByCounts, PageByIP } from '../interfaces/Page';

export const convertToPageByIP = (fileContent: string | ArrayBuffer): PageByIP => {
  const pageViewMap: PageByIP = {}
  fileContent.toString().split(/\n/).forEach((eachElem) => {
    const [page, ipAddress] = eachElem.split(/\s/);
    if( page !== "" && ipAddress.match(/\d+\.\d+\.\d+\.\d+/)) {
      if( pageViewMap[page]){
        const temp = pageViewMap[page]
        temp.push(ipAddress);
        pageViewMap[page]= temp
      }else{
        pageViewMap[page]= [ipAddress]
      }
    }         
  })
  return pageViewMap;
}

export const getTotalViews = (allPageViews: PageByIP): PageByCounts[] => {
  const visits = Object.keys(allPageViews).map((eachPage) => {
    return {
      pageName: eachPage,
      visitCount: allPageViews[eachPage].length
    } 
  })
  return sortByCount(visits)
}

export const getUniqueViews = (allPageViews: PageByIP): PageByCounts[] => {
  const visits = Object.keys(allPageViews).map((eachPage) => {
    const uniqueIps = [...new Set(allPageViews[eachPage])];
    return {
      pageName: eachPage,
      visitCount: uniqueIps.length
    } 
  })
  return sortByCount(visits)
}

const sortByCount = (visits: PageByCounts[]) => {
  return visits.sort((a,b) =>  b.visitCount - a.visitCount)
}

