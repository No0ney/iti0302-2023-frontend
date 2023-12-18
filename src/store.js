import {reactive} from "vue";

export const store = reactive({
    loggedIn: false
});

export const checkLogState = () => {
    store.loggedIn = localStorage.getItem('user-token') !== null;
}