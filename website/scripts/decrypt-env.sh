gpg --output ../.env --decrypt ../.env.gpg;

# echo 'PASSWORD' | gpg --batch --yes --passphrase-fd 0 --output ./.env --decrypt ./.env.gpg;