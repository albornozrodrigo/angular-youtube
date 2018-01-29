import { Injectable } from '@angular/core';

/**
 * A simple class for storing key/value pairs with localStorage.
 */
@Injectable()
export class LocalStorage {
	private storage: any;

	constructor() {
		this.storage = window.localStorage;
	}

	getAll() {
		var keys = Object.keys(this.storage);
		var len = keys.length;
		var content = [];
		var key;
        var item;

		while(len--) {
			key = keys[len];
			item = window.localStorage.getItem(key);
			item = (typeof(item) === 'object') ? JSON.parse(item) : item;
			content.push({
				key: key,
				value: item
			});
		}

        return content;
	}

	put(key: string, value: string) {
		this.storage[key] = value;
	}

	get(key: string) {
		return this.storage[key] || null;
	}

	putObject(key: string, value: object) {
		this.storage[key] = JSON.stringify(value);
	}

	putArray(key: string, value: Array<any>) {
		this.storage[key] = JSON.stringify(value);
	}

	putArrayItem(key: string, value: any) {
		let content = this.storage[key];
		content.push(value);
		this.putArray(key, content);
	}

	removeArrayItem(key: string, index: number) {
		let content = this.storage[key];
		content.splice(index, 1);
		this.putArray(key, content);
	}

	getObject(key) {
		let content = this.storage[key];
      	return content ? JSON.parse(content) : null;
	}

	getArray(key) {
		return this.getObject(key);
	}

	remove(key) {
		return this.storage.removeItem(key) || null;
	}

	removeAll() {
		let keys = Object.keys(this.storage);
		let len = keys.length;
        let key;

		while(len--) {
			key = keys[len];
			this.storage.removeItem(key);
		}

        return this.getAll();
	}
}