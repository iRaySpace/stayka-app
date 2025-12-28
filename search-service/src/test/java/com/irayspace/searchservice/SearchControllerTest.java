import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.assertj.MockMvcTester;

public class SearchControllerTest {

    @Autowired
    private MockMvcTester mockMvcTester;

    @Test
    public void search_ShouldReturnOk() {
        final var requestBuilder = mockMvcTester.get().uri("/search");
        Assertions.assertThat(requestBuilder).hasStatusOk();
    }

}