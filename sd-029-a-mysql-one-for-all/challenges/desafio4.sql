SELECT
	U.user_name AS 'pessoa_usuaria',
	CASE 
		WHEN YEAR(MAX(H.history_date)) >= 2021
		THEN 'Ativa'
		ELSE 'Inativa'
	END AS 'status_pessoa_usuaria'
FROM
	SpotifyClone.users U
	INNER JOIN SpotifyClone.histories H ON H.user_id = U.user_id
GROUP BY
	U.user_name
ORDER BY
	U.user_name;