function attachParam(url, ...params) {
    let result = url;
    for (param of params) {
        result += param;
    }
    return result
}

function safeCheck(badwords, text){
    let url = 'http://api.adams.ai/datamixiApi/tms';    
    const key = '8571616425836319259'
    const query = text;
    const lang = 'kor';
    const analysis = 'pos';

    url = attachParam(url, '?', `key=${key}&`, `query=${query}&`, `lang=${lang}&`, `analysis=${analysis}`);
    const encodedUrl = encodeURI(url);

    const request = require('sync-request');
    let result = request('POST', encodedUrl);
    result = JSON.parse(result.getBody('utf8'))['return_object'];
    
    let words = [];
    for (sentence of result['sentence']) {
        Array.prototype.push.apply(words, sentence['morp']);
    }
    words = words.map((v) => v['lemma']);

    let badwordCnt = 0
    for (word of words) {
        if (badwords.includes(word)) {
            badwordCnt += 1;
        }
    }
    return badwordCnt;
}

exports.safeCheck = safeCheck;