package assign;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

// Check if the input is pangram or not.
public class Question3 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter a sentence: ");
		String input = scanner.nextLine();
		scanner.close();

		if (isPangram(input)) {
			System.out.println("The input is a pangram.");
		} else {
			System.out.println("The input is not a pangram.");
		}
	}

	public static boolean isPangram(String input) {
	
		input = input.replaceAll("\\s", "").toLowerCase();

		
		Set<Character> alphabetSet = new HashSet<>();

		for (char c : input.toCharArray()) {
			if (c >= 'a' && c <= 'z') {
				alphabetSet.add(c);
			}
		}

	
		return alphabetSet.size() == 26;
	}

}
