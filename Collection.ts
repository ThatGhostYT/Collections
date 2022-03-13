interface Entry{
	key: string;
	value: any;
}

interface CollectionIterable{
	value: any | undefined;
	done: boolean;
}

export default class{
	private entries: Entry[];
	
	constructor(...entries: Entry[]){
		this.entries = [];
		if(entries) this.addEntry(...entries);
	}

	get length(){
		return this.entries.length;
	}
	
	addEntry(...entries: Entry[]){
		const keys = this.keys();
		for(const entry of entries){
			if(keys.includes(entry.key)) throw new Error(`Collection keys must be unique. ${entry.key} is already in use.`);
			this.entries.push(entry);
		}
	}

	get(key: string){
		let ret;
		for(const entry of this.entries){
			if(entry.key === key){
				ret = entry.value;
				break;
			}
		}
		return ret;
	}

	remove(key: string){
		const i = this.entries.findIndex((item) => item.key === key);
		if(i !== 1){
			this.entries.splice(i,1);
		}
	}

	first(){
		return this.entries[0].value;
	}

	last(){
		return this.entries[this.length - 1].value;
	}

	keys(){
		const keys: string[] = [];
		for(const entry of this.entries){
			keys.push(entry.key);
		}
		return keys;
	}

	values(){
		const values: any[] = [];
		for(const entry of this.entries){
			values.push(entry.value);
		}
		return values;
	}

	randomKey(){
		const keys = this.keys();
		return keys[Math.floor(Math.random() * keys.length)];
	}

	random(){
		const values = this.values();
		return values[Math.floor(Math.random() * values.length)];
	}

	[Symbol.iterator](){
		let i = -1;
		const entries = this.entries;
		return {
			next(): CollectionIterable{
				return {
					value: entries[++i]
						? [entries[i].key,entries[i].value]
						: undefined,
					done: i >= entries.length
				}
			}
		}
	}
}