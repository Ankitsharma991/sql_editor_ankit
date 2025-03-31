const isValidSQL = (query: string): boolean => {
    const sqlKeywords = [
        "SELECT", "INSERT", "UPDATE", "DELETE", "FROM", "WHERE", "JOIN",
        "ORDER BY", "GROUP BY", "HAVING", "LIMIT", "OFFSET", "CREATE",
        "DROP", "ALTER", "INDEX", "TABLE", "VALUES"
    ];

    const trimmedQuery = query.trim().toUpperCase();
    return sqlKeywords.some((keyword) => trimmedQuery.startsWith(keyword));
};

export default isValidSQL;
