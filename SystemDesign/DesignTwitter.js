/**
 * Design a simplified version of Twitter where users can post tweets, follow/unfollow 
 * another user and is able to see the 10 most recent tweets in the user's news feed. 
 * Your design should support the following methods: 
 * 
 * postTweet(userId, tweetId): Compose a new tweet.
 * 
 * getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. 
 * Each item in the news feed must be posted by users who the user followed or by the 
 * user herself. Tweets must be ordered from most recent to least recent.
 * 
 * follow(followerId, followeeId): Follower follows a followee.
 * 
 * unfollow(followerId, followeeId): Follower unfollows a followee.
 */
let time = 0;

class PriorityQueue {
    constructor() {}
//Priority Queue or min Heap to store tweet based on timestamp
}

PriorityQueue.prototype.add = function(item) {

}

PriorityQueue.prototype.getAll = function() {

}
class Tweet {
    constructor(tweetid) {
        this.tweetid = tweetid;
        this.timestamp = time++;
    }
}

class User {
    constructor(userid) {
        this.userid = userid;
        this.following = new Set(); //Set of Users
    }
}

class Twitter{
    constructor() {
        this.tweetMap = new Map(); //<Tweet, User>
        this.users = new Map(); //<UserId, User>
    }

    postTweet(userId, tweetId) {
        if(!this.users[userId]) {
            let u = new User(userId);
            this.users[userId] = u;
        }
        let t = new Tweet(tweetId);
        let usr = this.users[userId];
        this.tweetMap[t] = usr;
    }

    getNewsFeed(userId) {
        let usr = this.users[userId];
        let following = usr.following;
        let res = new PriorityQueue();
        let count = 0;
        for(let twt in this.tweetMap) {
            if(this.tweetMap[twt] == usr || following.has(this.tweetMap[twt])) {
                res.add(twt);
                count++;
            }
            if(count == 10) {
                break;
            }
        }
        return res.getAll();
    }

    follow(followerId, followeeId) {
        if(!this.users[followerId] || !this.users[followeeId]) {
            return;
        }
        this.users[followerId].following.add(this.users[followeeId]);
    }

    unfollow(followerId, followeeId) {
        if(!this.users[followerId] || !this.users[followeeId]) {
            return;
        }
        this.users[followerId].following.delete(this.users[followeeId]);
    }
}