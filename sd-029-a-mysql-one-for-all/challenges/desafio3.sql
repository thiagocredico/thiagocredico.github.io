SELECT
	U.user_name AS 'pessoa_usuaria',
	COUNT(*) AS 'musicas_ouvidas',
	ROUND(SUM(S.song_duration) / 60, 2) AS 'total_minutos'
FROM
	SpotifyClone.users U
	INNER JOIN SpotifyClone.histories H ON H.user_id = U.user_id
	INNER JOIN SpotifyClone.songs S ON S.song_id = H.song_id
GROUP BY
	U.user_name
ORDER BY
	U.user_name;