import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./Chat/Chat";
import Header from "./Header/Header";
import History from "./History/History";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Products from "./Products/Products";
import Users from "./Users/Users";
import ViewEdit from "./Products/Component/ViewEdit";
import Categories from "./Categories/Categories";
import ViewCategories from "./Categories/ViewCategories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div
          id="main-wrapper"
          data-theme="light"
          data-layout="vertical"
          data-navbarbg="skin6"
          data-sidebartype="full"
          data-sidebar-position="fixed"
          data-header-position="fixed"
          data-boxed-layout="full"
        >
          <Header />

          <Menu />

          <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/chat' component={Chat} />
            <Route path='/users' component={Users} />
            
            <Route exact path='/products' component={Products} />
            <Route path='/products/view-edit' component={ViewEdit} />

            <Route exact path='/categories' component={Categories} />
            <Route path='/categories/view-edit' component={ViewCategories} />

            <Route path='/history' component={History} />

          </Switch>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
