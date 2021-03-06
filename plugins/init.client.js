import {debounce} from "../utils/lib";
import PCONF from '../config/project.conf';
const {name,version,hash,repositories} = PCONF;
export default ({store})=>{
  //CONSOLE
  console.log(`\n %c ${name} ${version} ${hash} %c ${repositories} \n`,"color: #fadfa3; background: #030307; padding:5px 0;","background: #5abebc; padding:5px 0;");
  //console.log("\n %c Github %c https://github.com/Bersder \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #5abebc; padding:5px 0;");

  //事件绑定
  window.onscroll = debounce(()=>store.commit('scrollTopC',window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop),50);
  window.onresize = debounce(()=>store.commit('screenSizeC',{
    screenHeight:window.innerHeight || document.documentElement.clientHeight,
    screenWidth:window.innerWidth || document.body.clientWidth
  }),50);
  store.commit('scrollTopC',window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
  store.commit('screenSizeC',{
    screenHeight:window.innerHeight || document.documentElement.clientHeight,
    screenWidth:window.innerWidth || document.body.clientWidth
  });
}
