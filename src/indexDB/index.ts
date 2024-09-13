import localforage from 'localforage';

class CacheManager<T> {
	private store: LocalForage;

	constructor(storeName: string) {
		this.store = localforage.createInstance({
			name: storeName,
			driver: localforage.INDEXEDDB, // 优先使用 IndexedDB
		});
	}

	// 设置缓存
	async setItem(key: string, value: T): Promise<void> {
		try {
			await this.store.setItem(key, value);
			console.log(`Item set with key: ${key}`);
		} catch (error) {
			console.error(`Error setting item ${key}`, error);
		}
	}

	// 获取缓存
	async getItem(key: string): Promise<T | null> {
		try {
			const value = await this.store.getItem<T>(key);
			console.log(`Item retrieved with key: ${key}`);
			return value;
		} catch (error) {
			console.error(`Error getting item ${key}`, error);
			return null;
		}
	}

	// 删除缓存
	async removeItem(key: string): Promise<void> {
		try {
			await this.store.removeItem(key);
			console.log(`Item removed with key: ${key}`);
		} catch (error) {
			console.error(`Error removing item ${key}`, error);
		}
	}

	// 清空缓存
	async clear(): Promise<void> {
		try {
			await this.store.clear();
			console.log('Cache cleared');
		} catch (error) {
			console.error('Error clearing cache', error);
		}
	}

	// 获取缓存大小
	async length(): Promise<number> {
		try {
			const length = await this.store.length();
			console.log(`Cache size: ${length} items`);
			return length;
		} catch (error) {
			console.error('Error getting cache size', error);
			return 0;
		}
	}
}

// 使用示例
const cache = new CacheManager<string>('myCache');

// 存储数据
cache.setItem('username', 'JohnDoe');

// 获取数据
cache.getItem('username').then((value) => console.log('测试数据', value));

// // 删除数据
// cache.removeItem('username');

// // 清空缓存
// cache.clear();
