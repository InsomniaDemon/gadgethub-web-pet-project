package gadgethub.backend.repostories;

import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class AuthorisationRepository {
    private final DataSource dataSource;

    public AuthorisationRepository(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public String getPassword(String login) throws SQLException {
        String sql = """
            SELECT password FROM authorisation
            WHERE login = (?)
        """;

        Connection connection = DataSourceUtils.getConnection(dataSource);
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, login);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if  (!resultSet.next()) {
                    throw new SQLException("No such authorisation data");
                }
                return resultSet.getString("password");
            }
        } finally {
            DataSourceUtils.releaseConnection(connection, dataSource);
        }
    }
}
