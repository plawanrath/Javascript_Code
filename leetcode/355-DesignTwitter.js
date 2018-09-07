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
        this.followee = new Set(); //Set of Users
    }
}

class Twitter{
    constructor() {
        this.tweetMap = new Map(); //<Tweet, User>
        this.users = new Map(); //<UserId, User>
    }
}

Twitter.prototype.postTweet = function(userId, tweetId) {
    if(this.users[userId] == undefined) {
        let u = new User(userId);
        this.users[userId] = u;
    }
    let t = new Tweet(tweetId);
    let usr = this.users[userId];
    this.tweetMap[t] = usr;
}

Twitter.prototype.getNewsFeed = function(userId) {
    let followees = this.users[userId].followee;
    let res = new PriorityQueue();
    let count = 0;
    for(let twt in this.tweetMap) {
        if(this.tweetMap[twt].userid == userId || followees.has(this.tweetMap[twt])) {
            res.add(twt);
            count++;
        }
        if(count == 0) {
            break;
        }
    }
    return res.getAll();
}

Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.users[followerId] == undefined || this.users[followeeId] == undefined) {
        return;
    }
    this.users[followeeId].followee.add(this.users[followerId]);
}

Twiiter.prototype.unfollow = function(followerId, followeeId) {
    if(this.users[followerId] == undefined || this.users[followeeId] == undefined) {
        return;
    }
    this.users[followeeId].followee.delete(this.users[followerId]);   
}