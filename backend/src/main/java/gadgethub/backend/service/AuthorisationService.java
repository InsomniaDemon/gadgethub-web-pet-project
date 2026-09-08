package gadgethub.backend.service;

import gadgethub.backend.repostories.AuthorisationRepository;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class AuthorisationService {
    private final AuthorisationRepository authorisationRepository;

    public AuthorisationService(AuthorisationRepository authorisationRepository) { this.authorisationRepository = authorisationRepository; }

    public boolean checkCredentials (String login, String password) {
        try {
            return password.equals(authorisationRepository.getPassword(login));
        } catch (SQLException e) {
            System.out.println("YA GAY");
            throw new RuntimeException(e);
        }
    }
}
