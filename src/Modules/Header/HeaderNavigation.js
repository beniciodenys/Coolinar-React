import React,{Component} from 'react';

class HeaderNavigation extends Component{
  
    render(){
        return (
            <nav class="header-nav">
                <a class="header-link" href="#">Профиль</a>
                <a class="header-link" href="#">Кухня</a>
                <a class="header-link" href="#">Избранные</a>
            </nav>
        );
    }
}

export default HeaderNavigation;