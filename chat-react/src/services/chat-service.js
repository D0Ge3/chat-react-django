
export default class ChatService {
    _apiBase = 'http://127.0.0.1:8000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`,{
            method: 'GET',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('auth_token')}`
            }
        });
        // if(!res.ok) {
        //     throw new Error(`Could not fetch ${url}`+
        //         `, received ${res.status}`);
        // }
        return await res.json();
    };

    async getRooms() {
        const res = await this.getResource(`/api/v1/chat/room/`);
        return res;
    }

    async getToken(login,password) {
        const res = await fetch(`${this._apiBase}/auth/token/create/`,{
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `username=${login}&password=${password}`
            });


        return await res.json();

    }


    
}