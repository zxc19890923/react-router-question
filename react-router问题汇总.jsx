1. 报错
Uncaught TypeError: Cannot read property 'getCurrentLocation' of undefined
这是因为Router没有添加history的原因

import {Router, Route, browserHistory} from "react-router";
<Router history={browserHistory}>

</Router>
