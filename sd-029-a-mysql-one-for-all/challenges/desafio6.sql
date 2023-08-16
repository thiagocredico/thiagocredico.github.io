SELECT
	MIN(P.plan_price) AS 'faturamento_minimo',
	MAX(P.plan_price) AS 'faturamento_maximo',
	ROUND(AVG(P.plan_price), 2) AS 'faturamento_medio',
	SUM(P.plan_price) AS 'faturamento_total'
FROM
	SpotifyClone.users U
	INNER JOIN SpotifyClone.plans P ON P.plan_id = U.plan_id;