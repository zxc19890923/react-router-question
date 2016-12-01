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

3. 路由之间的跳转, 按钮绑定事件， 事件中书写如下代码
hashHistory.push("/contact");
这是：import {hashHistory} from react-router

如果是： import {browserHisory} from "react-router"
那么就是： browserHistory.push("/contact");


4. 路由的进入和离开事件
  onEnter   onLeave
  可以绑定自定义事件
  onEnter={this.enter.bind(this)}
  onLeave={this.leave.bind(this)}
