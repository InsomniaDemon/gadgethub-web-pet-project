package gadgethub.backend.service;

import gadgethub.backend.exceptions.InvalidCredentials;
import gadgethub.backend.exceptions.NoSuchUserException;
import gadgethub.backend.repostories.AuthorisationRepository;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class AuthorisationService {
    private final AuthorisationRepository authorisationRepository;

    public AuthorisationService(AuthorisationRepository authorisationRepository) { this.authorisationRepository = authorisationRepository; }

    public Long checkCredentials (String login, String password) {
        try {
            if (!password.equals(authorisationRepository.getPassword(login).getValue())) {
                throw new InvalidCredentials("Invalid login or password");
            }
            return authorisationRepository.getPassword(login).getKey();
        } catch (NoSuchUserException e) {
            throw new InvalidCredentials("Invalid login or password");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
