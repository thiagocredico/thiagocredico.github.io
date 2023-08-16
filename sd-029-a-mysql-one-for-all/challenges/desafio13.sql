SELECT
    CASE
	    WHEN U.user_age > 60 
        THEN 'Maior de 60 anos'
        WHEN U.user_age BETWEEN 31 AND 60 
        THEN 'Entre 31 e 60 anos'
    ELSE 'Até 30 anos'
    END AS 'faixa_etaria',
    COUNT(DISTINCT U.user_id) AS 'total_pessoas_usuarias',
	COUNT(F.user_id) AS 'total_favoritadas'
FROM 
    SpotifyClone.favorites F
    RIGHT JOIN SpotifyClone.users U ON U.user_id = F.user_id
GROUP BY 
    faixa_etaria
ORDER BY 
    faixa_etaria;
