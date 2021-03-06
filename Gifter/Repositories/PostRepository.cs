﻿using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;
using System;

namespace Gifter.Repositories
{
    public class PostRepository
    {
        private readonly ApplicationDbContext _context;

        public PostRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Post> GetAll()
        {
            return _context.Post.Include(p => p.UserProfile).Include(p => p.comments).OrderByDescending(p => p.DateCreated).ToList();
        }

        public Post GetById(int id)
        {
            return _context.Post.Include(p => p.UserProfile).Include(p => p.comments).FirstOrDefault(p => p.Id == id);
        }

        public List<Post> GetByUserProfileId(int id)
        {
            return _context.Post.Include(p => p.UserProfile).Include(p => p.comments)
                            .Where(p => p.UserProfileId == id)
                            .OrderBy(p => p.Title)
                            .ToList();
        }

        public void Add(Post post)
        {
            _context.Add(post);
            _context.SaveChanges();
        }

        public void Update(Post post)
        {
            _context.Entry(post).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            // Remove related comments first
            var relatedComments = _context.Comment.Where(c => c.PostId == id);
            _context.Comment.RemoveRange(relatedComments);

            var post = GetById(id);
            _context.Post.Remove(post);
            _context.SaveChanges();
        }

        public List<Post> Search(string criterion, bool sortDescending)
        {
            var query = _context.Post
                                .Include(p => p.UserProfile)
                                .Include(p => p.comments)
                                .Where(p => p.Title.Contains(criterion) || p.Caption.Contains(criterion));

            return sortDescending
                ? query.OrderByDescending(p => p.DateCreated).ToList()
                : query.OrderBy(p => p.DateCreated).ToList();
        }

        public List<Post> SearchDate(DateTime dateTime, bool sortDescending)
        {
            var query = _context.Post
                                .Include(p => p.UserProfile)
                                .Include(p => p.comments)
                                .Where(p => p.DateCreated >= dateTime);

            return sortDescending
                ? query.OrderByDescending(p => p.DateCreated).ToList()
                : query.OrderBy(p => p.DateCreated).ToList();
        }
    }
}
