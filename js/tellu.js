
/**随机获取一句话
 * @method getQuote
 * @return {String}
 */
 var quoteArr = [
    //俚语
    // "我们所知的只是沧海一粟，我们未知的却是汪洋大海。",
    // "当你的才华还撑不起你的野心时，那就静下来学习吧！",

    // //诗歌/小说
    // "不要因为走得太远,忘了我们为什么出发。 纪伯伦《先知》",
    // "与其孤独跋涉，不如安然沉睡，我们仍会醒来。 《龙族3·黑月之潮》",
    // "当所有传奇写下第一个篇章，原来所谓英雄也和我们一样。 《网游之练级专家》",
    // "与恶龙缠斗过久，自身亦成为恶龙。 弗里德里希·尼采《善恶的彼岸》",
    // "从明天起，做一个幸福的人。喂马，劈柴，周游世界。 海子《面朝大海，春暖花开》",
    // "我有一所房子，面朝大海，春暖花开。 海子《面朝大海，春暖花开》",
    // "陌生人，我也为你祝福。 海子《面朝大海，春暖花开》",
    "越是艰难处，越是修心时。",



]


function getQuote(quoteArr) {
    return quoteArr[Math.floor(Math.random() * quoteArr.length)] // 数组中随机取一个元素
}

var tellu = document.getElementById("tellu");
tellu.innerHTML = getQuote(quoteArr);
