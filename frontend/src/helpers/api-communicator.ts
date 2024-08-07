import axios from "axios";

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("/user/login", { email, password });
    if(res.status !== 200) {
        throw new Error("Unable to login user");
    }
    const data = await res.data;
    return data;
}

export const signupUser = async (name: string, email: string, password: string) => {
    const res = await axios.post("/user/signup", { name, email, password });
    if(res.status!== 200) {
        throw new Error("Unable to signup user");
    }
    const data = await res.data;
    return data;
}

export const logoutUser = async () => {
    const res = await axios.get("/user/logout");
    if(res.status!== 200) {
        throw new Error("Unable to logout user");
    }
    const data = await res.data;
    return data;
}

export const checkAuthStatus = async () => {
    const res = await axios.get("/user/auth-status");
    if(res.status!== 200) {
        throw new Error("Unable to check auth status");
    }
    const data = await res.data;
    return data;
}

export const sendChatRequest = async (message: string) => {
    const res = await axios.post("/chat/new", { message });
    if(res.status!== 200) {
        throw new Error("Unable to send chat message");
    }
    const data = await res.data;
    return data;
}

export const getUserChats = async () => {
    const res = await axios.get("/chat/all-chats");
    if(res.status!== 200) {
        throw new Error("Unable to get user chats");
    }
    const data = await res.data;
    return data;
}

export const deleteUserChats = async () => {
    const res = await axios.delete("/chat/delete");
    if(res.status!== 200) {
        throw new Error("Unable to delete user chats");
    }
    const data = await res.data;
    return data;
}
