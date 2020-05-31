import React, { Fragment, useEffect } from 'react';

// Styles
import './Background.scss'

// Pictures
import waterColor from "../../assets/img/watercolor.png";
import homeDog from "../../assets/img/homeDog.jpg";

const Background = () => {

    useEffect(() => console.log(
            `
                                                                                                                               dddddddd                                                                                
               AAA                                           tttt                                                              d::::::d     DDDDDDDDDDDDD                                                              
              A:::A                                       ttt:::t                                                              d::::::d     D::::::::::::DDD                                                           
             A:::::A                                      t:::::t                                                              d::::::d     D:::::::::::::::DD                                                         
            A:::::::A                                     t:::::t                                                              d:::::d      DDD:::::DDDDD:::::D                                                        
           A:::::::::A          rrrrr   rrrrrrrrr   ttttttt:::::ttttttt           aaaaaaaaaaaaa  nnnn  nnnnnnnn        ddddddddd:::::d        D:::::D    D:::::D    ooooooooooo      ggggggggg   ggggg    ssssssssss   
          A:::::A:::::A         r::::rrr:::::::::r  t:::::::::::::::::t           a::::::::::::a n:::nn::::::::nn    dd::::::::::::::d        D:::::D     D:::::D oo:::::::::::oo   g:::::::::ggg::::g  ss::::::::::s  
         A:::::A A:::::A        r:::::::::::::::::r t:::::::::::::::::t           aaaaaaaaa:::::an::::::::::::::nn  d::::::::::::::::d        D:::::D     D:::::Do:::::::::::::::o g:::::::::::::::::gss:::::::::::::s 
        A:::::A   A:::::A       rr::::::rrrrr::::::rtttttt:::::::tttttt                    a::::ann:::::::::::::::nd:::::::ddddd:::::d        D:::::D     D:::::Do:::::ooooo:::::og::::::ggggg::::::ggs::::::ssss:::::s
       A:::::A     A:::::A       r:::::r     r:::::r      t:::::t                   aaaaaaa:::::a  n:::::nnnn:::::nd::::::d    d:::::d        D:::::D     D:::::Do::::o     o::::og:::::g     g:::::g  s:::::s  ssssss 
      A:::::AAAAAAAAA:::::A      r:::::r     rrrrrrr      t:::::t                 aa::::::::::::a  n::::n    n::::nd:::::d     d:::::d        D:::::D     D:::::Do::::o     o::::og:::::g     g:::::g    s::::::s      
     A:::::::::::::::::::::A     r:::::r                  t:::::t                a::::aaaa::::::a  n::::n    n::::nd:::::d     d:::::d        D:::::D     D:::::Do::::o     o::::og:::::g     g:::::g       s::::::s   
    A:::::AAAAAAAAAAAAA:::::A    r:::::r                  t:::::t    tttttt     a::::a    a:::::a  n::::n    n::::nd:::::d     d:::::d        D:::::D    D:::::D o::::o     o::::og::::::g    g:::::g ssssss   s:::::s 
   A:::::A             A:::::A   r:::::r                  t::::::tttt:::::t     a::::a    a:::::a  n::::n    n::::nd::::::ddddd::::::dd     DDD:::::DDDDD:::::D  o:::::ooooo:::::og:::::::ggggg:::::g s:::::ssss::::::s
  A:::::A               A:::::A  r:::::r                  tt::::::::::::::t     a:::::aaaa::::::a  n::::n    n::::n d:::::::::::::::::d     D:::::::::::::::DD   o:::::::::::::::o g::::::::::::::::g s::::::::::::::s 
 A:::::A                 A:::::A r:::::r                    tt:::::::::::tt      a::::::::::aa:::a n::::n    n::::n  d:::::::::ddd::::d     D::::::::::::DDD      oo:::::::::::oo   gg::::::::::::::g  s:::::::::::ss  
AAAAAAA                   AAAAAAArrrrrrr                      ttttttttttt         aaaaaaaaaa  aaaa nnnnnn    nnnnnn   ddddddddd   ddddd     DDDDDDDDDDDDD           ooooooooooo       gggggggg::::::g   sssssssssss    
                                                                                                                                                                                              g:::::g                  
                                                                                                                                                                                  gggggg      g:::::g                  
                                                                                                                                                                                  g:::::gg   gg:::::g                  
                                                                                                                                                                                   g::::::ggg:::::::g                  
                                                                                                                                                                                    gg:::::::::::::g                   
                                                                                                                                                                                      ggg::::::ggg                     
                                                                                                                                                                                         gggggg                        
    `)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])

    return (
        <Fragment>
            <img id='waterColor' style={{height: window.innerHeight}} className='waterColor' src={waterColor} alt="watercolor background" />
            <img id='homeDog' style={{height: window.innerHeight}} className='homeDog' src={homeDog} alt="homeDog background" />
        </Fragment>
    )
}

export default Background