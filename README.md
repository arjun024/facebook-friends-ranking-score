facebook-friends-ranking-score
==============================

Find your Facebook Friends Ranking Score http://arjunsreedharan.org/post/65979958297/find-your-facebook-friends-ranking-score


* Facebook is constantly changes their code; so if the script doesn't work, you could help by contributing.


###How To##

* Go to [this page](http://code.arjunsreedharan.org/facebook-friends-ranking-score/)
and bookmark the given link.

Or, you can create a bookmark and set its link to:
```
javascript:function%20creator(e,t,n)%7Bvar%20r=document.createElement(n);r.cellspacing=%223%22;var%20i=document.createTextNode(t);r.appendChild(i);e.appendChild(r)%7Dfunction%20displayData(e)%7Bvar%20t=document.createElement(%22table%22);var%20n=document.createElement(%22thead%22);t.appendChild(n);var%20r=document.createElement(%22tr%22);creator(r,%22Name%22,%22th%22);creator(r,%22Type%22,%22th%22);creator(r,%22Score%22,%22th%22);n.appendChild(r);var%20s=document.createElement(%22tbody%22);t.appendChild(s);for(i=0;i<e.length;i++)%7Bvar%20o=e%5Bi%5D.type;var%20r=document.createElement(%22tr%22);creator(r,e%5Bi%5D%5B%22text%22%5D,%22td%22);creator(r,Object.keys(e%5Bi%5D%5B%22grammar_costs%22%5D)%5B0%5D.slice(0,-1).substring(1),%22td%22);creator(r,e%5Bi%5D%5B%22grammar_costs%22%5D%5BObject.keys(e%5Bi%5D%5B%22grammar_costs%22%5D)%5B0%5D%5D,%22td%22);s.appendChild(r)%7Ddocument.body.innerHTML=%22%22;document.body.appendChild(t)%7Did=require%28%22CurrentUserInitialData%22%29%5B%22USER_ID%22%5D%7C%7Crequire%28%22CurrentUserInitialData%22%29%5B%22ACCOUNT_ID%22%5D%7C%7Crequire%28%22Env%22%29.user%7C%7Crequire%28%22CurrentUserInitialData%22%29%5B%22id%22%5D;url=%22//www.facebook.com/ajax/typeahead/search/facebar/bootstrap/?viewer=%22+id+%22&__a=1%22;x=new%20XMLHttpRequest;x.onreadystatechange=function()%7Bif(x.readyState==4&&x.status==200)%7Bsrr=JSON.parse(x.responseText.substring(9)).payload.entries;displayData(srr)%7D%7D;x.open(%22GET%22,url,true);x.send()
```

* Login to your [Facebook homepage](http://facebook.com) and click on the bookmark.
* Tada !

![screenshot](http://icdn3.digitaltrends.com/image/name-score-625x625.png)
