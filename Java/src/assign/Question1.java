package assign;

import java.util.Random;

// Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
public class Question1 {

	public static void shuffleArray(int[] array) {
		int n = array.length;
		Random r = new Random();

		for (int i = n - 1; i > 0; i--) {
			int j = r.nextInt(i + 1);
			
			int temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	public static void main(String[] args) {
		
		int[] array = { 1, 2, 3, 4, 5, 6, 7 };
		shuffleArray(array);

		//it will print shuffled array
		for (int number : array) {
			System.out.print(" "+number);
		}
	}

}
