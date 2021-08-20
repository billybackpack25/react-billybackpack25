import { Genevieve } from "../";
import { PrivateRoute } from "../../Routing"; 

import {
    GalleryPage,
    Instagram,
    Movies,
    Poems,
    Voice
} from './';

export default function RouterApp({path}) {
    return (
      <>
        <PrivateRoute 
          path={`${path}`} component={Genevieve} exact
          permission_name='Genevieve' permissions_needed='genevieve' 
        />
        <PrivateRoute 
          path={`${path}/gallery`} component={GalleryPage} exact
          permission_name='/genevieve/gallery' permissions_needed='genevieve' 
        />
        <PrivateRoute 
          path={`${path}/instagram`} component={Instagram} exact
          permission_name='/genevieve/instagram' permissions_needed='genevieve' />
        <PrivateRoute 
          path={`${path}/movies`} component={Movies} exact 
          permission_name='/genevieve/movies' permissions_needed='genevieve'/>
        <PrivateRoute 
          path={`${path}/poems`} component={Poems} exact 
          permission_name='/genevieve/poems' permissions_needed='genevieve' />
        <PrivateRoute 
          path={`${path}/voice`} component={Voice} exact 
          permission_name='/genevieve/voice' permissions_needed='genevieve' />
        </>
  );
}