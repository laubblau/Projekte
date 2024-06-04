import java.util.Scanner;

public class Taschenrechner {

    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);

      System.out.print("Bitte geben Sie die Art der Rechenoperation ein (+-*/): ");
      String operation = scanner.nextLine();

      System.out.print("Bitte geben Sie eine Zahl ein: ");
      int num1 = scanner.nextInt();

      System.out.print("Bitte geben Sie eine weitere Zahl ein: ");
      int num2 = scanner.nextInt();

      switch (operation) {
        case "+":
          System.out.println(num1+num2);
          break;
        case "-":
          System.out.println(num1-num2);
          break;
        case "*":
          System.out.println(num1*num2);
          break;
        case "/": {
          if(num2 == 0) {
            System.out.println("Division by zero not allowed");
          } else {
            System.out.println(num1/num2);
          }
          break;
        }
      }
    }
  }
  
