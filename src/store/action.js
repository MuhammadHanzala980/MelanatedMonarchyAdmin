import request from "../utils/request";

// export const nextStap = (data) => ({
//   type: "nextStap",
//   payload: data,
// });

// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<< Authentication >>>>>>>>>>>>>>>>>>

export function signInUser(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/admin/login",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function upDateProfile(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/update_profile",
        method: "put",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function changePassword(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/change_password",
        method: "put",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function ForgetPassword(body) {
  console.log("Running");
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/forgot_password",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function newPassword(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "auth/forgot_password",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export function getListing(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "listing/admin/get_listing",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function getActiveBidding(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "bidding/admin/get_active_bidding",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function getPendingBidding(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "bidding/admin/get_pending_bidding",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function getUsers(body) {
  console.log(body);
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      request({
        route: "users/admin/get_users",
        method: "post",
        payload: body,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
