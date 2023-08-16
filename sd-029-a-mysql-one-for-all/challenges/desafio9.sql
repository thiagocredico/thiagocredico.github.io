SELECT 
    COUNT(*) AS musicas_no_historico
FROM 
    SpotifyClone.histories H
    INNER JOIN SpotifyClone.users U ON U.user_id = H.user_id 
WHERE 
    U.user_name = 'Barbara Liskov';