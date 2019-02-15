var request = require('request');
var convert = require('xml-js');
var parser = require('xml2js');

var url = 'http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastVersionCheck';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('TEST_SERVICE_KEY'); /* 서비스 인증 */
queryParams += '&' + encodeURIComponent('ftype') + '=' + encodeURIComponent('ODAM'); /* 파일구분 -ODAM: 동네예보실황 -VSRT: 동네예보초단기 -SHRT: 동네예보단기 */
queryParams += '&' + encodeURIComponent('basedatetime') + '=' + encodeURIComponent('2015112030800'); /* 각각의 base_time 로 검색 참고자료 참조 */

function wea(callback){
    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        parser.parseString(body, function (err, jsonData) {
        console.log('Status', response.statusCode);
        console.log('Headers', JSON.stringify(response.headers));
        console.log('Reponse received', body);
        callback(jsonData.response.header.resultMsg);
    });
});
}

exports.wea = wea;