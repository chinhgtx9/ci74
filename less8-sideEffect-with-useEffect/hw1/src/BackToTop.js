import { useEffect } from "react";
import { useState } from "react";
import { Button } from "reactstrap";



const BackToTop =() => {


    const [visit, setVist] = useState(0)
    const [hide,setHide] = useState('true')
    const handleButton = ()=>{
        setVist(document.documentElement.scrollTop = 0);
    }
    
   
    useEffect(() => {
       
        const handleScroll = () => {
            setVist(document.documentElement.scrollTop);
            let visted = document.documentElement.scrollTop;
            if(visit < visted){
                setHide(true);
            }else{
                setHide(false);
            }
            console.log('hide inside' + hide);
            console.log(visit);
            console.log(visted);
        }
        document.addEventListener("scroll", handleScroll);
        // return () => {
        //     document.removeEventListener("scroll", handleScroll);
        // }
    });
    console.log('hide forigin:' + hide);
    return(
        <div>
                
            
               
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus. Neque viverra justo nec ultrices dui sapien eget mi proin. Eu augue ut lectus arcu. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed nisi. Ultrices dui sapien eget mi proin sed. Suspendisse potenti nullam ac tortor vitae purus. Tristique magna sit amet purus gravida. Nam at lectus urna duis convallis convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Urna id volutpat lacus laoreet non curabitur gravida. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Sed vulputate mi sit amet. Sit amet porttitor eget dolor morbi non arcu risus. Mi in nulla posuere sollicitudin aliquam ultrices. Convallis aenean et tortor at risus viverra adipiscing at. Feugiat scelerisque varius morbi enim. Sagittis vitae et leo duis ut. Pulvinar elementum integer enim neque volutpat ac tincidunt. Bibendum enim facilisis gravida neque convallis a. Ipsum dolor sit amet consectetur adipiscing elit. Ut venenatis tellus in metus vulputate eu. Blandit aliquam etiam erat velit scelerisque in dictum. Est sit amet facilisis magna etiam. Vel facilisis volutpat est velit egestas. Aliquet enim tortor at auctor. Condimentum vitae sapien pellentesque habitant morbi tristique. Egestas dui id ornare arcu odio ut sem nulla pharetra. Erat imperdiet sed euismod nisi. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Senectus et netus et malesuada fames ac turpis egestas. Non blandit massa enim nec dui nunc mattis enim ut. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Lectus quam id leo in. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. A erat nam at lectus urna duis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Enim nunc faucibus a pellentesque sit amet. Sed libero enim sed faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Vel turpis nunc eget lorem. Risus pretium quam vulputate dignissim suspendisse in est. Eget gravida cum sociis natoque penatibus et. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a diam maecenas sed enim. Arcu dictum varius duis at consectetur lorem. Blandit volutpat maecenas volutpat blandit aliquam etiam. Consequat nisl vel pretium lectus. Nibh nisl condimentum id venenatis. Morbi non arcu risus quis varius quam quisque. Id diam maecenas ultricies mi eget. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Dui ut ornare lectus sit amet est placerat. Sem fringilla ut morbi tincidunt augue. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Justo donec enim diam vulputate ut. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Orci a scelerisque purus semper eget duis at tellus at. Feugiat in ante metus dictum at tempor. Ac tortor vitae purus faucibus ornare suspendisse. Vel facilisis volutpat est velit egestas. In arcu cursus euismod quis viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Diam volutpat commodo sed egestas egestas. Libero justo laoreet sit amet cursus sit amet. Quis commodo odio aenean sed adipiscing diam donec. Morbi tincidunt augue interdum velit euismod in. Elementum pulvinar etiam non quam lacus. Nisi lacus sed viverra tellus in hac habitasse platea. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Tristique senectus et netus et malesuada fames ac turpis. Dui accumsan sit amet nulla facilisi morbi tempus. Dictum non consectetur a erat nam at lectus urna duis. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. In ante metus dictum at tempor commodo ullamcorper a. Rutrum quisque non tellus orci ac. Accumsan lacus vel facilisis volutpat est velit egestas. Rhoncus est pellentesque elit ullamcorper dignissim. Duis tristique sollicitudin nibh sit. Eget nunc lobortis mattis aliquam. Posuere urna nec tincidunt praesent semper feugiat. Mauris a diam maecenas sed enim ut sem. Orci a scelerisque purus semper eget duis at tellus. A scelerisque purus semper eget duis at tellus. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Fusce ut placerat orci nulla pellentesque. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Quisque egestas diam in arcu cursus. Magna eget est lorem ipsum dolor sit amet. Convallis posuere morbi leo urna. Nisi est sit amet facilisis magna etiam tempor. In iaculis nunc sed augue. Id donec ultrices tincidunt arcu non. Eget duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus. Neque viverra justo nec ultrices dui sapien eget mi proin. Eu augue ut lectus arcu. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed nisi. Ultrices dui sapien eget mi proin sed. Suspendisse potenti nullam ac tortor vitae purus. Tristique magna sit amet purus gravida. Nam at lectus urna duis convallis convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Urna id volutpat lacus laoreet non curabitur gravida. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Sed vulputate mi sit amet. Sit amet porttitor eget dolor morbi non arcu risus. Mi in nulla posuere sollicitudin aliquam ultrices. Convallis aenean et tortor at risus viverra adipiscing at. Feugiat scelerisque varius morbi enim. Sagittis vitae et leo duis ut. Pulvinar elementum integer enim neque volutpat ac tincidunt. Bibendum enim facilisis gravida neque convallis a. Ipsum dolor sit amet consectetur adipiscing elit. Ut venenatis tellus in metus vulputate eu. Blandit aliquam etiam erat velit scelerisque in dictum. Est sit amet facilisis magna etiam. Vel facilisis volutpat est velit egestas. Aliquet enim tortor at auctor. Condimentum vitae sapien pellentesque habitant morbi tristique. Egestas dui id ornare arcu odio ut sem nulla pharetra. Erat imperdiet sed euismod nisi. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Senectus et netus et malesuada fames ac turpis egestas. Non blandit massa enim nec dui nunc mattis enim ut. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Lectus quam id leo in. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. A erat nam at lectus urna duis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Enim nunc faucibus a pellentesque sit amet. Sed libero enim sed faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Vel turpis nunc eget lorem. Risus pretium quam vulputate dignissim suspendisse in est. Eget gravida cum sociis natoque penatibus et. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a diam maecenas sed enim. Arcu dictum varius duis at consectetur lorem. Blandit volutpat maecenas volutpat blandit aliquam etiam. Consequat nisl vel pretium lectus. Nibh nisl condimentum id venenatis. Morbi non arcu risus quis varius quam quisque. Id diam maecenas ultricies mi eget. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Dui ut ornare lectus sit amet est placerat. Sem fringilla ut morbi tincidunt augue. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Justo donec enim diam vulputate ut. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Orci a scelerisque purus semper eget duis at tellus at. Feugiat in ante metus dictum at tempor. Ac tortor vitae purus faucibus ornare suspendisse. Vel facilisis volutpat est velit egestas. In arcu cursus euismod quis viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Diam volutpat commodo sed egestas egestas. Libero justo laoreet sit amet cursus sit amet. Quis commodo odio aenean sed adipiscing diam donec. Morbi tincidunt augue interdum velit euismod in. Elementum pulvinar etiam non quam lacus. Nisi lacus sed viverra tellus in hac habitasse platea. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Tristique senectus et netus et malesuada fames ac turpis. Dui accumsan sit amet nulla facilisi morbi tempus. Dictum non consectetur a erat nam at lectus urna duis. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. In ante metus dictum at tempor commodo ullamcorper a. Rutrum quisque non tellus orci ac. Accumsan lacus vel facilisis volutpat est velit egestas. Rhoncus est pellentesque elit ullamcorper dignissim. Duis tristique sollicitudin nibh sit. Eget nunc lobortis mattis aliquam. Posuere urna nec tincidunt praesent semper feugiat. Mauris a diam maecenas sed enim ut sem. Orci a scelerisque purus semper eget duis at tellus. A scelerisque purus semper eget duis at tellus. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Fusce ut placerat orci nulla pellentesque. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Quisque egestas diam in arcu cursus. Magna eget est lorem ipsum dolor sit amet. Convallis posuere morbi leo urna. Nisi est sit amet facilisis magna etiam tempor. In iaculis nunc sed augue. Id donec ultrices tincidunt arcu non. Eget duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus. Neque viverra justo nec ultrices dui sapien eget mi proin. Eu augue ut lectus arcu. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed nisi. Ultrices dui sapien eget mi proin sed. Suspendisse potenti nullam ac tortor vitae purus. Tristique magna sit amet purus gravida. Nam at lectus urna duis convallis convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Urna id volutpat lacus laoreet non curabitur gravida. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Sed vulputate mi sit amet. Sit amet porttitor eget dolor morbi non arcu risus. Mi in nulla posuere sollicitudin aliquam ultrices. Convallis aenean et tortor at risus viverra adipiscing at. Feugiat scelerisque varius morbi enim. Sagittis vitae et leo duis ut. Pulvinar elementum integer enim neque volutpat ac tincidunt. Bibendum enim facilisis gravida neque convallis a. Ipsum dolor sit amet consectetur adipiscing elit. Ut venenatis tellus in metus vulputate eu. Blandit aliquam etiam erat velit scelerisque in dictum. Est sit amet facilisis magna etiam. Vel facilisis volutpat est velit egestas. Aliquet enim tortor at auctor. Condimentum vitae sapien pellentesque habitant morbi tristique. Egestas dui id ornare arcu odio ut sem nulla pharetra. Erat imperdiet sed euismod nisi. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Senectus et netus et malesuada fames ac turpis egestas. Non blandit massa enim nec dui nunc mattis enim ut. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Lectus quam id leo in. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. A erat nam at lectus urna duis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Enim nunc faucibus a pellentesque sit amet. Sed libero enim sed faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Vel turpis nunc eget lorem. Risus pretium quam vulputate dignissim suspendisse in est. Eget gravida cum sociis natoque penatibus et. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a diam maecenas sed enim. Arcu dictum varius duis at consectetur lorem. Blandit volutpat maecenas volutpat blandit aliquam etiam. Consequat nisl vel pretium lectus. Nibh nisl condimentum id venenatis. Morbi non arcu risus quis varius quam quisque. Id diam maecenas ultricies mi eget. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Dui ut ornare lectus sit amet est placerat. Sem fringilla ut morbi tincidunt augue. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Justo donec enim diam vulputate ut. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Orci a scelerisque purus semper eget duis at tellus at. Feugiat in ante metus dictum at tempor. Ac tortor vitae purus faucibus ornare suspendisse. Vel facilisis volutpat est velit egestas. In arcu cursus euismod quis viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Diam volutpat commodo sed egestas egestas. Libero justo laoreet sit amet cursus sit amet. Quis commodo odio aenean sed adipiscing diam donec. Morbi tincidunt augue interdum velit euismod in. Elementum pulvinar etiam non quam lacus. Nisi lacus sed viverra tellus in hac habitasse platea. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Tristique senectus et netus et malesuada fames ac turpis. Dui accumsan sit amet nulla facilisi morbi tempus. Dictum non consectetur a erat nam at lectus urna duis. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. In ante metus dictum at tempor commodo ullamcorper a. Rutrum quisque non tellus orci ac. Accumsan lacus vel facilisis volutpat est velit egestas. Rhoncus est pellentesque elit ullamcorper dignissim. Duis tristique sollicitudin nibh sit. Eget nunc lobortis mattis aliquam. Posuere urna nec tincidunt praesent semper feugiat. Mauris a diam maecenas sed enim ut sem. Orci a scelerisque purus semper eget duis at tellus. A scelerisque purus semper eget duis at tellus. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Fusce ut placerat orci nulla pellentesque. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Quisque egestas diam in arcu cursus. Magna eget est lorem ipsum dolor sit amet. Convallis posuere morbi leo urna. Nisi est sit amet facilisis magna etiam tempor. In iaculis nunc sed augue. Id donec ultrices tincidunt arcu non. Eget duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus. Neque viverra justo nec ultrices dui sapien eget mi proin. Eu augue ut lectus arcu. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Egestas congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed nisi. Ultrices dui sapien eget mi proin sed. Suspendisse potenti nullam ac tortor vitae purus. Tristique magna sit amet purus gravida. Nam at lectus urna duis convallis convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Urna id volutpat lacus laoreet non curabitur gravida. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Sed vulputate mi sit amet. Sit amet porttitor eget dolor morbi non arcu risus. Mi in nulla posuere sollicitudin aliquam ultrices. Convallis aenean et tortor at risus viverra adipiscing at. Feugiat scelerisque varius morbi enim. Sagittis vitae et leo duis ut. Pulvinar elementum integer enim neque volutpat ac tincidunt. Bibendum enim facilisis gravida neque convallis a. Ipsum dolor sit amet consectetur adipiscing elit. Ut venenatis tellus in metus vulputate eu. Blandit aliquam etiam erat velit scelerisque in dictum. Est sit amet facilisis magna etiam. Vel facilisis volutpat est velit egestas. Aliquet enim tortor at auctor. Condimentum vitae sapien pellentesque habitant morbi tristique. Egestas dui id ornare arcu odio ut sem nulla pharetra. Erat imperdiet sed euismod nisi. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Senectus et netus et malesuada fames ac turpis egestas. Non blandit massa enim nec dui nunc mattis enim ut. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Lectus quam id leo in. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. A erat nam at lectus urna duis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Enim nunc faucibus a pellentesque sit amet. Sed libero enim sed faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Vel turpis nunc eget lorem. Risus pretium quam vulputate dignissim suspendisse in est. Eget gravida cum sociis natoque penatibus et. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a diam maecenas sed enim. Arcu dictum varius duis at consectetur lorem. Blandit volutpat maecenas volutpat blandit aliquam etiam. Consequat nisl vel pretium lectus. Nibh nisl condimentum id venenatis. Morbi non arcu risus quis varius quam quisque. Id diam maecenas ultricies mi eget. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Dui ut ornare lectus sit amet est placerat. Sem fringilla ut morbi tincidunt augue. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Justo donec enim diam vulputate ut. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Orci a scelerisque purus semper eget duis at tellus at. Feugiat in ante metus dictum at tempor. Ac tortor vitae purus faucibus ornare suspendisse. Vel facilisis volutpat est velit egestas. In arcu cursus euismod quis viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Diam volutpat commodo sed egestas egestas. Libero justo laoreet sit amet cursus sit amet. Quis commodo odio aenean sed adipiscing diam donec. Morbi tincidunt augue interdum velit euismod in. Elementum pulvinar etiam non quam lacus. Nisi lacus sed viverra tellus in hac habitasse platea. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Tristique senectus et netus et malesuada fames ac turpis. Dui accumsan sit amet nulla facilisi morbi tempus. Dictum non consectetur a erat nam at lectus urna duis. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. In ante metus dictum at tempor commodo ullamcorper a. Rutrum quisque non tellus orci ac. Accumsan lacus vel facilisis volutpat est velit egestas. Rhoncus est pellentesque elit ullamcorper dignissim. Duis tristique sollicitudin nibh sit. Eget nunc lobortis mattis aliquam. Posuere urna nec tincidunt praesent semper feugiat. Mauris a diam maecenas sed enim ut sem. Orci a scelerisque purus semper eget duis at tellus. A scelerisque purus semper eget duis at tellus. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Fusce ut placerat orci nulla pellentesque. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Quisque egestas diam in arcu cursus. Magna eget est lorem ipsum dolor sit amet. Convallis posuere morbi leo urna. Nisi est sit amet facilisis magna etiam tempor. In iaculis nunc sed augue. Id donec ultrices tincidunt arcu non. Eget duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis tincidunt. Non tellus orci ac auctor augue mauris augue neque gravida.
            </p>
            
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                
                {( hide === false )?<button style={{marginBottom:'100px',position:'fixed' ,bottom: '50px', right: '50px',backgroundColor:'red'}} onClick = {handleButton}> Top</button> :''}
                
             </div>
             
            
            
                
            
        </div>

    );
}
export default BackToTop;