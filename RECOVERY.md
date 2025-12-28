# What to do if you dislike recent changes

If the latest commit does not meet your needs, you can quickly review or undo it without losing your prior work.

## 1) Inspect what changed
- See the most recent commits: `git log --oneline -n 5`
- View the latest commit details: `git show HEAD`

## 2) Undo the latest commit (safest)
- Create a revert commit that undoes the previous one while keeping history intact:
  ```bash
  git revert HEAD
  git push origin work
  ```

## 3) Reset to a specific older commit (rewrite history)
> Only use this if you are comfortable force-pushing.
- Reset your branch to the prior commit: `git reset --hard HEAD~1`
- Force-push to overwrite the remote branch: `git push --force origin work`

## 4) Start fresh from a clean working tree
- Discard any local changes and return to the last commit: `git reset --hard`
- Remove untracked files and folders (like a stray `node_modules/`): `git clean -fd`

## 5) Save work-in-progress before experimenting
- Stash local edits: `git stash push -m "backup before revert"`
- Later, restore them: `git stash pop`

Following these steps lets you evaluate or back out recent updates without risk to the older version of your site.
