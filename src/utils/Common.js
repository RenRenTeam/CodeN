
function imageSource() {
  return "http://image.shenyuan.org/Images/";
}
function urlencode(str, charset, callback) {
  //创建form通过accept-charset做encode
  var form = document.createElement('form');
  form.method = 'get';
  form.style.display = 'none';
  form.acceptCharset = charset;
  if (document.all) {
    //如果是IE那么就调用document.charset方法
    window.oldCharset = document.charset;
    document.charset = charset;
  }
  var input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'str';
  input.value = str;
  form.appendChild(input);
  form.target = '_urlEncode_iframe_';
  document.body.appendChild(form);
  //隐藏iframe截获提交的字符串
  if (!window['_urlEncode_iframe_']) {
    var iframe;
    if (document.all) {
      try {
        iframe = document.createElement('<iframe name="_urlEncode_iframe_"></iframe>');
      } catch (e) {
        iframe = document.createElement('iframe');
        //iframe.name = '_urlEncode_iframe_';
        iframe.setAttribute('name', '_urlEncode_iframe_');
      }
    } else {
      iframe = document.createElement('iframe');
      //iframe.name = '_urlEncode_iframe_';
      iframe.setAttribute('name', '_urlEncode_iframe_');
    }
    iframe.style.display = 'none';
    iframe.width = "0";
    iframe.height = "0";
    iframe.scrolling = "no";
    iframe.allowtransparency = "true";
    iframe.frameborder = "0";
    iframe.src = 'about:blank';
    document.body.appendChild(iframe);
  }
  //
  window._urlEncode_iframe_callback = function(str) {
    callback(str);
    if (document.all) {
      document.charset = window.oldCharset;
    }
  }
  //设置回调编码页面的地址，这里需要用户修改
  form.action = 'getEncodeStr.html';
  form.submit();
  setTimeout(function() {
    form.parentNode.removeChild(form);
    iframe.parentNode.removeChild(iframe);
  }, 500)

}
function urldecode(str, charset, callback) {
  var script = document.createElement('script');
  script.id = '_urlDecodeFn_';
  window._urlDecodeFn_ = callback;
  if (document.all) {
    if (navigator.userAgent.indexOf('MSIE 8') > -1) {
      //对于ie8做特别hack
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.charset = charset;
      link.href = 'data:text/plain;charset=' + charset + ',%23_decode_hidden_el_for_test_%7Bbackground-image%3Aurl(' + str + ')%7D';
      alert(link.href);
      document.body.appendChild(link);
      //然后创建一个隐藏的div，应用这个样式
      var div = document.createElement('div');
      div.id = '_decode_hidden_el_for_test_';
      div.style.display = 'none';
      document.body.appendChild(div);
      setTimeout(function() {
        callback(document.getElementById('_decode_hidden_el_for_test_').currentStyle['backgroundImage'].match(/\("data\:text\/(.+)"\)/)[1]);
        link.parentNode.removeChild(link);
        div.parentNode.removeChild(div);
      }, 300)
    } else {
      //隐藏iframe截获提交的字符串
      if (!window['_urlDecode_iframe_']) {
        var iframe;
        if (document.all) {
          try {
            iframe = document.createElement('<iframe name="_urlDecode_iframe_"></iframe>');
          } catch (e) {
            iframe = document.createElement('iframe');
            //iframe.name = '_urlDecode_iframe_';
            iframe.setAttribute('name', '_urlDecode_iframe_');
          }
        } else {
          iframe = document.createElement('iframe');
          //iframe.name = '_urlDecode_iframe_';
          iframe.setAttribute('name', '_urlDecode_iframe_');
        }
        //iframe.name = '_urlDecode_iframe_';
        iframe.setAttribute('name', '_urlDecode_iframe_');
        iframe.style.display = 'none';
        iframe.width = "0";
        iframe.height = "0";
        iframe.scrolling = "no";
        iframe.allowtransparency = "true";
        iframe.frameborder = "0";
        iframe.src = 'about:blank';
        document.body.appendChild(iframe);
      }
      //ie下需要指明charset，然后src=datauri才可以
      iframe.contentWindow.document.write('<html><scrip' + 't charset="gbk" src="data:text/javascript;charset=gbk,parent._decodeStr_=\'' + str + '\'"></s' + 'cript></html>');
      setTimeout(function() {
        callback(_decodeStr_);
        iframe.parentNode.removeChild(iframe);
      }, 300)
    }
  } else {
    var src = 'data:text/javascript;charset=' + charset + ',_urlDecodeFn_("' + str + '");';
    src += 'document.getElementById("_urlDecodeFn_").parentNode.removeChild(document.getElementById("_urlDecodeFn_"));';
    script.src = src;
    document.body.appendChild(script);
  }
}

function cookieManager(name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString();
    }
    var path = options.path ? '; path=' + (options.path) : '';
    //正式的cookie名
    var domain;
    if (window.location.host.indexOf('localhost') > -1) {
      domain = options.domain ? '; domain=' + (options.domain) : '';
    } else {
      domain = '; domain=.rrliuxue.com';
    }
    //var domain =  '; domain=.rrliuxue.com';
    //var domain = options.domain ? '; domain=' + (options.domain) : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  } else {
    var cookieValue = null;
    if (document.cookief && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
}

function getCookie(cookie_name) {

  var allcookies = document.cookie;

  var cookie_pos = allcookies.indexOf(cookie_name); //索引的长度

  // 如果找到了索引，就代表cookie存在，

  // 反之，就说明不存在。

  if (cookie_pos != -1) {

    // 把cookie_pos放在值的开始，只要给值加1即可。

    cookie_pos += cookie_name.length + 1; //这里我自己试过，容易出问题，所以请大家参考的时候自己好好研究一下。。。

    var cookie_end = allcookies.indexOf(";", cookie_pos);

    if (cookie_end == -1) {

      cookie_end = allcookies.length;
    }

    var value = unescape(allcookies.substring(cookie_pos, cookie_end)); //这里就可以得到你想要的cookie的值了。。。

  }

  return value;

}

function json2str(o) {
  var arr = [];
  var fmt = function(s) {
    if (typeof s == 'object' && s != null) return json2str(s);
    return /^(string|number)$/.test(typeof s) ? "\"" + s + "\"" : s;
  }
  for (var i in o) arr.push("\"" + i + "\":" + fmt(o[i]));
  return '{' + arr.join(',') + '}';
}

function alert(msg) {
  new $.flavr(msg);
}

function showBox(_title, _content) {
  new $.flavr({
    title: _title,
    content: _content,
    buttons: {
      close: {}
    }
  });
}


function loadingImgFunc(id) {
  $("#" + id + " img").each(function() {
    $(this).attr("data-echo", $(this).attr("src"));
    $(this).attr("src", "http://passport.shenyuan.org/WebResources/Default/images/loading.gif");
  });

  echo.init({
    offset: 100,
    throttle: 250,
    unload: false,
    callback: function(element, op) {}
  });
}
function errorLog(e) {
  var log = {
    Content: JSON.stringify(e),
    Type: 'RenRenFront'
  };
  $.post("http://121.43.233.53:1898/api/QLPXuZSrgjPlyfgl", log, function(e) {
    //console.log(e);
  });
}
export default {
  urlencode,
  urldecode,
  cookieManager,
  getCookie,
  json2str,
  alert,
  loadingImgFunc,
  imageSource,
  showBox,
  errorLog
};
