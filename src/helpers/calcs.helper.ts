class CalculateHelper {
	static getDaysDifference(date: string) {
		const timeDifference =
			new Date(date).getTime() - new Date("2024-06-10").getTime();
		const daysDiff = Math.ceil(timeDifference / (1000 * 3600 * 24));
		return daysDiff <= 0 ? -1 : daysDiff;
	}
}

export { CalculateHelper };
