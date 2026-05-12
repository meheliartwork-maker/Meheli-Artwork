// Meheli Artwork - Database Helper (localStorage)

const DB = {
    // Keys
    USERS: 'meheli_users',
    ARTWORKS: 'meheli_artworks',
    ORDERS: 'meheli_orders',
    MESSAGES: 'meheli_messages',
    CURRENT_USER: 'meheli_session',

    init() {
        if (!localStorage.getItem(this.USERS)) {
            // Initial Admin Setup
            const admin = {
                id: 'admin_1',
                username: 'Chamu',
                password: '454454',
                email: 'dilshanchamuditha454@gmail.com',
                role: 'admin'
            };
            localStorage.setItem(this.USERS, JSON.stringify([admin]));
        }
        if (!localStorage.getItem(this.ARTWORKS)) {
            localStorage.setItem(this.ARTWORKS, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.ORDERS)) {
            localStorage.setItem(this.ORDERS, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.MESSAGES)) {
            localStorage.setItem(this.MESSAGES, JSON.stringify([]));
        }
    },

    // User Methods
    getUsers() {
        return JSON.parse(localStorage.getItem(this.USERS)) || [];
    },
    saveUser(user) {
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem(this.USERS, JSON.stringify(users));
    },
    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.CURRENT_USER));
    },
    login(user) {
        localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
    },
    logout() {
        localStorage.removeItem(this.CURRENT_USER);
    },

    // Artwork Methods
    getArtworks() {
        return JSON.parse(localStorage.getItem(this.ARTWORKS)) || [];
    },
    saveArtwork(artwork) {
        const artworks = this.getArtworks();
        const index = artworks.findIndex(a => a.id === artwork.id);
        if (index > -1) {
            artworks[index] = artwork;
        } else {
            artworks.push(artwork);
        }
        localStorage.setItem(this.ARTWORKS, JSON.stringify(artworks));
    },
    deleteArtwork(id) {
        const artworks = this.getArtworks().filter(a => a.id !== id);
        localStorage.setItem(this.ARTWORKS, JSON.stringify(artworks));
    },

    // Order Methods
    getOrders() {
        return JSON.parse(localStorage.getItem(this.ORDERS)) || [];
    },
    addOrder(order) {
        const orders = this.getOrders();
        orders.push(order);
        localStorage.setItem(this.ORDERS, JSON.stringify(orders));
    },

    // Message Methods
    getMessages() {
        return JSON.parse(localStorage.getItem(this.MESSAGES)) || [];
    },
    sendMessage(msg) {
        const messages = this.getMessages();
        messages.push(msg);
        localStorage.setItem(this.MESSAGES, JSON.stringify(messages));
    }
};

DB.init();
window.DB = DB;
