mongo -- "$MONGO_INITDB_DATABASE" <<EOF
    db.createCollection('images', {});
EOF