var username=document.getElementById("username"),hint=document.getElementById("hint"),phone=document.getElementById("phone"),phoneHint=document.getElementById("phone-hint"),num=document.getElementById("num"),numHint=document.getElementById("num-hint"),yanzheng=document.getElementById("yanzheng"),yanzhengHint=document.getElementById("yanzheng-hint"),click=document.getElementById("click"),clickHint=document.getElementById("clickHint");username.onblur=function(){var n=username.value;/^[0-9]*$/.test(n)?(console.log("shibai"),hint.innerHTML="用户名格式不正确"):/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(n)?(hint.innerHTML="",console.log("成功")):(hint.innerHTML="用户名格式不正确",console.log("失败"))},phone.onblur=function(){var n=phone.value;/^1[3,5,8]\d{9}$/.test(n)?(phoneHint.innerHTML="",console.log("成功")):(phoneHint.innerHTML="手机号格式不正确",console.log("失败"))},num.onblur=function(){var n=num.value;6<n.length&&""!=n?(numHint.innerHTML="",console.log("成功")):(numHint.innerHTML="密码设置不符合要求",console.log("失败"))};var btn,clock="",nums=10;function sendCode(n){(btn=n).disabled=!0,btn.value=nums+"秒后可重新获取",clock=setInterval(doLoop,1e3)}function doLoop(){0<--nums?btn.value=nums+"秒后可重新获取":(clearInterval(clock),btn.disabled=!1,btn.value="点击发送验证码",nums=10)}click.onclick=function(){var n=username.value,e=phone.value,t=num.value;""!=n&&""!=e&&""!=t||(""==n&&(hint.innerHTML="用户名不能为空"),""==e&&(phoneHint.innerHTML="手机号不能为空"),""==t&&(numHint.innerHTML="密码不能为空"))};