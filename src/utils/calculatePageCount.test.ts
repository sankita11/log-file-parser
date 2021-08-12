import {
  getUniqueViews,
  getTotalViews,
  convertToPageByIP
} from './calculatePageCounts';
import { PageByIP } from '../interfaces/Page';

const pageByIps : PageByIP = {
  "/home" : ["235.313.352.950",  "444.701.448.104", "444.701.448.104"],
  "/index" : [ "316.433.849.805", "444.701.448.104"],
}

const testFileContent = `
/help_page/1 126.318.035.038
/contact 184.123.665.067
/home 184.123.665.067
/about/2 444.701.448.104
/help_page/1 929.398.951.889
`

const wrongFileContent = `
This is a test log file
`


test('Convert file content to page by IP', () => {
  expect(convertToPageByIP(testFileContent)).toStrictEqual({
    "/help_page/1": ["126.318.035.038", "929.398.951.889"],
    "/contact": ["184.123.665.067"],
    "/home" : ["184.123.665.067"],
    "/about/2": ["444.701.448.104"]
  })
  expect(convertToPageByIP(wrongFileContent)).toStrictEqual({})
})

test('Get total page view', () => {

    expect(getTotalViews(pageByIps)).toStrictEqual([{
      pageName: "/home",
      visitCount: 3
    },
    {
      pageName: "/index",
      visitCount: 2
    }])

    expect(getTotalViews({})).toStrictEqual([])
});

test('Get unique page view', () => {

  expect(getUniqueViews(pageByIps)).toStrictEqual([{
    pageName: "/home",
    visitCount: 2
  },
  {
    pageName: "/index",
    visitCount: 2
  }])

  expect(getTotalViews({})).toStrictEqual([])
});