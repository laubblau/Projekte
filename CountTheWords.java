public class CountTheWords {
    public static void main(String[] args) {
      String text = "Das ist ein Testsatz";
      String[] words = text.split(" ");
      int wordsCount = words.length;
      System.out.printf("Der Satz enthält %d Wörter", wordsCount);
    }
  }
  
