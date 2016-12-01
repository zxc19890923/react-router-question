1. 报错
Uncaught TypeError: Cannot read property 'getCurrentLocation' of undefined
这是因为Router没有添加history的原因

import {Router, Route, browserHistory} from "react-router";
<Router history={browserHistory}>

</Router>

2. 路由中，配置完基本路由以后，首页加载子组件的内容，显示界面， {this.props.children}，
  但是在初始界面，还没有单机路由的时候，{this.props.children}为空undefined,所有初始化界面为空，为了默认界面，我们使用IndexRouter

import {IndexRouter} from "react-router";

<IndexRouter component={Init} />
这样就设定了默认首界面/显示的内容
