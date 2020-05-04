import {connect} from "redux-vue";
import * as userActions from "../actions/user";

const ProfilePage = {
  props: ['user', 'app', 'uploadPhoto'],

  /**
   *
   * @param h
   * @returns {*}
   */
  render (h){
    return (
      <div>
        <h1>Profile Page</h1>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app,
  };
}

function mapActionToProps(dispatch) {
  return {
    uploadPhoto: (data) => dispatch(userActions.uploadPhoto(data)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(ProfilePage);