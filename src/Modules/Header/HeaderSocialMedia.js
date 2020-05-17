import React,{Component} from 'react';

class HeaderSocialMedia extends Component{
  
    render(){
        return (
            <div class="header-social-media">
                <i class="header-social-icon fab fa-facebook-f"></i>
                <i class="header-social-icon fab fa-pinterest"></i>
                <i class="header-social-icon fab fa-twitter"></i>
                <a class="header-social-icon fab fa-instagram" href="https://www.instagram.com/morozov.denis/"></a>
            </div>
        );
    }
}

export default HeaderSocialMedia;